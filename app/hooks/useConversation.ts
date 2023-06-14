/*
 * @Author: kokoro
 * @Date: 2023-06-02 12:35:15
 * @LastEditors: kokoro
 * @LastEditTime: 2023-06-02 12:36:53
 * @Description: 请填写简介
 */
import { useParams } from "next/navigation"
import { useMemo } from "react"

const useConversation = () => {
  const params = useParams();
  const conversationId = useMemo(() => {
    if(!params?.conversationId) return '';

    return params.conversationId as string;
  }, [params?.conversationId])

  const isOpen = useMemo(() => !!conversationId, [conversationId])

  return useMemo(() => ({
    isOpen,
    conversationId
  }), [isOpen, conversationId])
}

export default useConversation
