const retrieveJobs = require('../jobs');

expect.extend(({
  toContainExactFields(jobs) {
    return jobs.every(job => job.items.every(jobItem => jobItem.experience = 'Internshipp'));
  }
}))

describe('GET /api/jobs', () => {
  let req;
  let res;

  beforeEach(() => {
    req = {
      query: {}
    };
    res = {
      json: jest.fn()
    }
  });

  it('should return all jobs', async (done) => {
    // act
    await retrieveJobs(req, res);

    // assert
    expect(res.json).toHaveBeenCalledWith({
      jobs: expect.any(Object),
      totalCount: 120
    });
    done();
  });

  it('should return jobs with specific job_type', async (done) => {
    // arrange
    const job_type = 'Part-time';
    req.query = {
      job_type
    };

    // act
    await retrieveJobs(req, res);

    // assert
    expect(res.json).toHaveBeenCalledWith({
      jobs: expect.arrayContaining([expect.objectContaining({
        items: expect.arrayContaining([
          expect.objectContaining({
            job_type
          })
        ])
      })]),
      totalCount: 36
    });
    done();
  });

  it('should return jobs with specific work_schedule', async (done) => {
    // arrange
    const work_schedule = 'Night shift';
    req.query = {
      work_schedule
    };

    // act
    await retrieveJobs(req, res);

    // assert
    expect(res.json).toHaveBeenCalledWith({
      jobs: expect.arrayContaining([expect.objectContaining({
        items: expect.arrayContaining([
          expect.objectContaining({
            work_schedule
          })
        ])
      })]),
      totalCount: 62
    });
    done();
  });

  it('should return jobs with specific experience', async (done) => {
    // arrange
    const experience = 'Senior';
    req.query = {
      experience
    };

    // act
    await retrieveJobs(req, res);

    // assert
    expect(res.json).toHaveBeenCalledWith({
      jobs: expect.arrayContaining([expect.objectContaining({
        items: expect.arrayContaining([
          expect.objectContaining({
            experience
          })
        ])
      })]),
      totalCount: 22
    });
    done();
  });

  it('should return jobs with specific department', async (done) => {
    // arrange
    const department = 'Orthopaedic Surgery';
    req.query = {
      department
    };

    // act
    await retrieveJobs(req, res);

    // assert
    expect(res.json).toHaveBeenCalledWith({
      jobs: expect.arrayContaining([expect.objectContaining({
        items: expect.arrayContaining([
          expect.objectContaining({
            department: expect.arrayContaining(['Orthopaedic Surgery'])
          })
        ])
      })]),
      totalCount: 33
    });
    done();
  });

  it('should return jobs with specific search', async (done) => {
    // arrange
    const search = 'Nurse';
    req.query = {
      search
    };

    // act
    await retrieveJobs(req, res);

    // assert
    expect(res.json).toHaveBeenCalledWith({
      jobs: expect.arrayContaining([expect.objectContaining({
        items: expect.arrayContaining([
          expect.objectContaining({
            job_title: expect.stringContaining(search)
          })
        ])
      })]),
      totalCount: 90
    });
    done();
  });

  it('should return jobs with multiple filters and search', async (done) => {
    // arrange
    const search = 'Practitioner';
    const job_type = 'Full-time';
    const experience = 'Intermediate';
    const work_schedule = 'Night shift';
    const department = 'Neurosurgery';
    req.query = {
      job_type,
      experience,
      work_schedule,
      department,
      search
    };

    // act
    await retrieveJobs(req, res);

    // assert
    expect(res.json).toHaveBeenCalledWith({
      jobs: expect.arrayContaining([expect.objectContaining({
        items: expect.arrayContaining([
          expect.objectContaining({
            job_type,
            experience,
            work_schedule,
            department: expect.arrayContaining([department]),
            job_title: expect.stringContaining(search)
          })
        ])
      })]),
      totalCount: 2
    });
    done();
  });
});
