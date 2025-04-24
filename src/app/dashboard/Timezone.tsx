"use client";

import { useState, useEffect } from "react";
import { format } from "date-fns";
import moment from "moment-timezone";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScheduleMeetingDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [timeSlot, setTimeSlot] = useState("1:00-2:00PM");
  const [selectedTimezone, setSelectedTimezone] = useState(moment.tz.guess());
  const [currentTime, setCurrentTime] = useState("");

  // Update current time every minute
  useEffect(() => {
    const updateTime = () => {
      try {
        setCurrentTime(moment().tz(selectedTimezone).format("h:mm A"));
      } catch (error) {
        console.error("Error updating time:", error);
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, [selectedTimezone]);

  const handleSchedule = () => {
    const [startTime] = timeSlot.split("-");
    const meetingTime = moment.tz(
      `${format(date!, "yyyy-MM-dd")} ${startTime}`,
      "yyyy-MM-dd h:mmA",
      selectedTimezone
    );

    console.log({
      date: meetingTime.toDate(),
      timeSlot,
      timezone: selectedTimezone,
      utcTime: meetingTime.utc().format(),
    });

    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="text-xl font-bold">
            Schedule Meeting
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Time Zone Selector */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Time Zone</label>
            <select
              value={selectedTimezone}
              onChange={(e) => setSelectedTimezone(e.target.value)}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              {moment.tz.names().map((tz) => (
                <option key={tz} value={tz}>
                  {tz} (GMT{moment.tz(tz).format("Z")})
                </option>
              ))}
            </select>
            <p className="text-sm text-gray-500 mt-1">
              Current time: {currentTime}
            </p>
          </div>

          {/* Date and Time Row */}
          <div className="grid grid-cols-2 gap-4">
            {/* Date Picker */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Date</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? (
                      format(date, "MMMM d, yyyy")
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    disabled={(date) => date < new Date()}
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Time Selector */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Time</label>
              <select
                value={timeSlot}
                onChange={(e) => setTimeSlot(e.target.value)}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                {[
                  "9:00-10:00AM",
                  "10:00-11:00AM",
                  "11:00-12:00PM",
                  "12:00-1:00PM",
                  "1:00-2:00PM",
                  "2:00-3:00PM",
                  "3:00-4:00PM",
                  "4:00-5:00PM",
                ].map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Schedule Button */}
        <Button
          onClick={handleSchedule}
          className="w-full bg-green-100 text-green-600 hover:bg-green-200 hover:text-green-700"
        >
          Schedule Meeting
        </Button>
      </DialogContent>
    </Dialog>
  );
}
