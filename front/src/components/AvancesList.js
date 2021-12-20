import React  from "react"
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost"
import {Link} from 'react-router-dom'

const GET_AVANCES = gql `
  {
  getAvances{
    _id
    projectId
    description
    advanceDate
    leaderOb
    
  }
  }
`

const AvanceList = () => {
    
    const { loading, error, data } = useQuery(GET_AVANCES)
    if (loading) return <p>Loading Messages...</p>;
    if (error) {
    return <p>Error</p>;
    }
    
    return (
    
    <div className="row">
     
      <div className="col-md-6 offset-md-3">
        {
          data.getAvances.map(({_id, projectId, description, advanceDate, leaderOb}) => (
            <div key={_id} className="card m-2">
            <div className="card-body">
              <h4>{projectId}</h4>
              <p>{description}</p>
              <p>{advanceDate}</p>
              <p>{leaderOb}</p>
            </div>
          </div>
          ))
        }
          <Link className="nav-link" to="/create-avance">
      <button className="btn btn-success btn-block">Crear nuevo avance</button>
      </Link>
      </div>
      
    </div>
    )
}

export default AvanceList