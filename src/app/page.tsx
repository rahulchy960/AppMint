import { trpc, getQueryClient } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import Client from "./Client";
import { Suspense } from "react";

async function Page() {

  const queryClient = getQueryClient(); 
  void queryClient.prefetchQuery(trpc.createAI.queryOptions( {text: "Rahul PreFetch"} ))
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback = {<p>Loading...</p>}>
      <Client />
      </Suspense>
    </HydrationBoundary>
  )
}

export default Page