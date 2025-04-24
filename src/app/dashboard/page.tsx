"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useMemo, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Calendar } from "@/components/ui/calendar";
import { countries } from "countries-list";
import HeaderDash from "@/components/dashboard/HeaderDash";
import { ScheduleMeetingDialog } from "./Timezone";

interface Country {
  name: string;
}
export default function Dashboard() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [date, setDate] = useState<Date>(new Date(2025, 3, 1));
  const countryEntries = useMemo(
    () => Object.entries(countries as Record<string, Country>),
    []
  );
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 overflow-auto ">
        <HeaderDash />
        <div className="mx-auto p-6 max-w-6xl">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-2xl font-bold">My Counselor</h1>

            <Button onClick={() => setIsDialogOpen(true)}>
              Open Schedule Dialog
            </Button>

            <ScheduleMeetingDialog
              open={isDialogOpen}
              onOpenChange={setIsDialogOpen}
            />
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            <Card className="h-67">
              <CardContent className="flex flex-col items-center p-6">
                <div className="relative mb-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage
                      src="/placeholder.svg?height=96&width=96"
                      alt="Donald Jefferson"
                    />
                    <AvatarFallback>DJ</AvatarFallback>
                  </Avatar>
                  <div className="absolute right-1 border-1 border-white top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#32B22E] text-white"></div>
                </div>
                <h2 className="text-xl font-semibold">Donald Jefferson</h2>
                <p className="text-xs text-[#B2B2B2]">
                  don_jefferson@gmail.com
                </p>
                <p className="text-xs text-[#B2B2B2]">Donald Jefferson</p>
              </CardContent>
            </Card>

            {/* Preference Card */}
            <Card className="h-67">
              <CardContent className="p-6">
                <h2 className="mb-4 text-xl font-bold">My Preference</h2>
                <div className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Destination
                    </label>
                    <Select defaultValue="Australia">
                      <SelectTrigger className="w-full rounded-full">
                        <SelectValue className="text-black" />
                      </SelectTrigger>
                      <SelectContent>
                        {countryEntries.map(([code, country]) => (
                          <SelectItem
                            className="text-black"
                            key={code}
                            value={country.name}
                          >
                            {country.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Highest Qualification
                    </label>
                    <Select defaultValue="bachelors">
                      <SelectTrigger className="w-full rounded-full">
                        <SelectValue placeholder="Select qualification" />
                      </SelectTrigger>
                      <SelectContent className="">
                        <SelectItem value="bachelors">
                          Bachelor{"'"}s Degree
                        </SelectItem>
                        <SelectItem value="masters">
                          Master{"'"}s Degree
                        </SelectItem>
                        <SelectItem value="phd">PhD</SelectItem>
                        <SelectItem value="diploma">Diploma</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-white shadow-md rounded-xl h-67">
              <Calendar
                mode="single"
                selected={date}
                onSelect={(date) => date && setDate(date)}
                className=" w-full  [&_table]:w-[19rem] [&_tr]:justify-between [&_tr]:mt-0"
                classNames={{
                  day_selected:
                    "bg-[#32B22E] rounded-full  text-white hover:bg-[#32B22E]",
                  day_today: "bg-green-100 rounded-full text-green-600",
                }}
              />
            </div>
          </div>

          {/* Meetings Table */}
          <div className="mt-8">
            <h2 className="mb-4 text-2xl font-bold">My Meetings</h2>
            <div className="overflow-hidden rounded-lg border bg-white shadow">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-gray-50">
                      <th className="w-12 px-4 py-3 text-left">
                        <Checkbox />
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-[#B2B2B2]">
                        Counselor
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-[#B2B2B2]">
                        Destination
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-[#B2B2B2]">
                        Highest Qualification
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-[#B2B2B2]">
                        Date/Time
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-[#B2B2B2]">
                        Meeting Link
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-4 py-3">
                        <Checkbox />
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage
                              src="/placeholder.svg?height=32&width=32"
                              alt="Donald Jefferson"
                            />
                            <AvatarFallback>DJ</AvatarFallback>
                          </Avatar>
                          <span>Donald Jefferson</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">Australia</td>
                      <td className="px-4 py-3">Bachelor{"'"}s Degree</td>
                      <td className="px-4 py-3">April 25 / 5:00 PM</td>
                      <td className="px-4 py-3">
                        <a href="#" className="text-blue-500 hover:underline">
                          https://zoom.us/j/123456789
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">
                        <Checkbox />
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage
                              src="/placeholder.svg?height=32&width=32"
                              alt="Donald Jefferson"
                            />
                            <AvatarFallback>DJ</AvatarFallback>
                          </Avatar>
                          <span>Donald Jefferson</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">United Kingdom</td>
                      <td className="px-4 py-3">Bachelor{"'"}s Degree</td>
                      <td className="px-4 py-3">April 29 / 6:00 PM</td>
                      <td className="px-4 py-3">
                        <a href="#" className="text-blue-500 hover:underline">
                          https://zoom.us/j/987654321
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
