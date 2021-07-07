import { FC } from 'react'
import {useRouter} from "next/router";

const Post: FC = () => {
  const router = useRouter()
  const { postId } = router.query

  return (
    <div>post: {postId}</div>
  )
}

export default Post