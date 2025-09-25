import { Button } from "@/components/ui/button";
import { formatDuration, intervalToDuration } from "date-fns";
import { CrownIcon } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";


interface Props {
  points: number,
  msBeforeNext: number;
};

export const Usage = ({ points, msBeforeNext }: Props) => {
  const resetTime = useMemo(() => {
    try {
      return formatDuration(
        intervalToDuration({
          start: new Date(),
          end: new Date(Date.now() + msBeforeNext)
        }),
        { format: ["months", "days", "hours"] }
      )
    } catch(error) {
      console.error("Error formatting duration ", error);
      return "Unknown Error"
    }
  }, [msBeforeNext]);

  return (
    <div className="rounded-t-xl bg-background border border-b-0 p-2.5">
      <div className="flex items-center gap-x-2">
        <div>
          <p className="text-sm">
            {points} <span>{' '}Credit remaining</span> 
          </p>
          <p className="text-xs text-muted-foreground">
            Resets in {" "} { resetTime }
          </p>
        </div>
        <Button
          asChild
          size="sm"
          variant= "tertiary"
          className="ml-auto"
        >
          <Link href={"/pricing"}>
            <CrownIcon /> Upgrade
          </Link>
        </Button>
      </div> 
    </div>
  )
}