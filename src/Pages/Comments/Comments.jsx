import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Loading } from '../../Components'
import { Error } from '../Error'

export const Comments = () => {

    const [comment, setComment] = React.useState({
        isLoading: true,
        isError: false,
        data: []
    })

    const { postId } = useParams()

    React.useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res => res.json())
        .then(data => setComment({
            ...comment,
            isLoading: false,
            data: data
        }))
        .catch(err => setComment({
            isLoading: false,
            isError: err
        }))
    }, [])
  return (
    <>
    {
        comment.isLoading && <Loading />
    }

    {
        comment.isError && <Error />
    }

    {
        comment.data.length > 0 && <ul>
            {
                comment.data.map(com => (
                    <li key={com.id}>
                        <h3>{com.name}</h3>
                        <Link>{com.email}</Link> <br />
                        <p>{com.body}</p> <br />
                    </li>
                ))
            }
        </ul> 
    }
    </>
  )
}
