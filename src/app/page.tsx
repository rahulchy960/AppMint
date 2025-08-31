"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input';
import { useTRPC } from '@/trpc/client'
import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react'
import { toast } from 'sonner';


function Page() {
  const trpc = useTRPC();
  const invoke = useMutation(trpc.invoke.mutationOptions({
    onSuccess : () => {
      toast.success("Background Job started")
    }
  }));

  const [value, setValue] = useState("");

  return (
    <div className='p-4 max-w-7xl mx-auto'>
      <Input value = {value} onChange={(e)=> setValue(e.target.value)} />
      <Button disabled = {invoke.isPending} onClick={()=> invoke.mutate({value : value})}>
        Invoke Background Job
      </Button>
    </div>
  )
}

export default Page