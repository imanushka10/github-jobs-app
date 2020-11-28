import React, { useState } from 'react'
import useFetchJobs from "./useFetch"
import { Container } from "react-bootstrap"
import Job from "./job"


function App() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const { jobs, error, loading } = useFetchJobs(params, page)


  return (
    <Container>
      {loading && <h1>Loading ...</h1>}
      {error && <h1>Error, Try Refereshing.</h1>}
      {jobs.map(job => {
        return <Job key={job.id} job={job} />
      }
      )}
    </Container>
  )
}

export default App
