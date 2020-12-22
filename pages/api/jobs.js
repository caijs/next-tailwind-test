// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const storedJobs = require('../../data/jobs');

const SORT_ORDER = {
  asc: 'asc',
  desc: 'desc'
};

const retrieveJobs =  async (req, res) => {
  res.statusCode = 200;

  const { jobs, totalCount } = getJobsByQueryParam(storedJobs, req);
  const sortedJobs = sortJobs(jobs, req);

  // this timeout emulates unstable network connection, do not remove this one
  // you need to figure out how to guarantee that client side will render
  // correct results even if server-side can't finish replies in the right order
  // await new Promise((resolve)=>setTimeout(resolve, 1000 * Math.random()));

  res.json({ jobs: sortedJobs, totalCount });
}

const getJobsByQueryParam = (jobs, req) => {
  // Get all expected filters and process them separately by providing a filter predicate
  const { job_type, work_schedule, experience, department, search } = req.query;
  if (job_type) {
    jobs = filterJobsByCategory(jobs, jobItem => jobItem.job_type === job_type);
  }
  if (work_schedule) {
    jobs = filterJobsByCategory(jobs, jobItem => jobItem.work_schedule === work_schedule);
  }
  if (experience) {
    jobs = filterJobsByCategory(jobs, jobItem => jobItem.experience === experience);
  }
  if (department) {
    jobs = filterJobsByCategory(jobs, jobItem => jobItem.department.includes(department));
  }
  if (search) {
    jobs = filterJobsByCategory(jobs, jobItem => {
      return jobItem.name.toLowerCase().includes(search.toLowerCase())
        || jobItem.job_title.toLowerCase().includes(search.toLowerCase())
        || jobItem.description.toLowerCase().includes(search.toLowerCase());
    });
  }

  const totalCount = jobs.reduce((sum, job) => sum + job.total_jobs_in_hospital, 0);
  return { jobs, totalCount };
}

const filterJobsByCategory = (jobs, filterPredicate) => {
  return jobs.map(job => {
    const filteredJobItems = job.items.filter(filterPredicate);
    if (filteredJobItems.length) {
      return { ...job, total_jobs_in_hospital: filteredJobItems.length, items: filteredJobItems };
    }
  }).filter(jobItems => !!jobItems);
}

const sortJobs = (jobs, req) => {
  const { sort } = req.query;
  if (!sort) {
    // Return jom list as it is if there is no sorting specified
    return jobs;
  }

  // Expected sorting expression:
  // ...&sort=field1:asc,field2:desc...
  const sortCriterias = sort.split(',');

  // Define sorting predicate
  const sortPredicate = (item1, item2) => {
    return sortCriterias.map(sortCriteria => {
      const [field, order] = sortCriteria.split(':');
      // Convert field value to string if it is not a string as there is no clear requirement about how it should be sorted in that case
      const item1FieldString = typeof item1[field] === 'string' ? item1[field] : item1[field].toString();
      const item2FieldString = typeof item2[field] === 'string' ? item2[field] : item2[field].toString();
      if (order === SORT_ORDER.asc) {
        return item1FieldString.localeCompare(item2FieldString);
      }
      if (order === SORT_ORDER.desc) {
        return item2FieldString.localeCompare(item1FieldString);
      }
      return 0;
    }).reduce((p, n) => p ? p : n, 0);
  };

  return jobs.map(job => {
    const sortedJobItems = job.items.sort(sortPredicate);
    return { ...job, items: sortedJobItems };
  });
}

module.exports = retrieveJobs;