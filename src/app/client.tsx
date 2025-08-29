"use client"

import { useTRPC } from "@/trpc/client"
import { useSuspenseQuery } from "@tanstack/react-query"


function Client() {
  const trpc = useTRPC();
  const {data} = useSuspenseQuery(trpc.createAI.queryOptions({text: "Rahul PreFetch"}))

  return (
    <div>
        {JSON.stringify(data)}
    </div>
  )
}

export default Client