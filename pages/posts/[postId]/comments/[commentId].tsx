import { FC } from 'react'
import {useRouter} from "next/router";

const Comment: FC = () => {
  const router = useRouter()
  const { commentId } = router.query

  return (
    <div>comment: {commentId}</div>
  )
}

export default Comment