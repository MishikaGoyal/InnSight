"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Area, AreaChart, Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { AlertTriangle, CalendarDays, DollarSign, Hotel, TrendingUp, Users } from "lucide-react"

// Demo data for Dynamic Pricing Overview
const dynamicPricingData = [
  { date: "2023-05-01", standard: 100, deluxe: 150, suite: 250 },
  { date: "2023-05-02", standard: 110, deluxe: 160, suite: 260 },
  { date: "2023-05-03", standard: 105, deluxe: 155, suite: 255 },
  { date: "2023-05-04", standard: 115, deluxe: 165, suite: 265 },
  { date: "2023-05-05", standard: 120, deluxe: 170, suite: 270 },
  { date: "2023-05-06", standard: 125, deluxe: 175, suite: 275 },
  { date: "2023-05-07", standard: 130, deluxe: 180, suite: 280 },
]

// Demo data for Occupancy Trend
const occupancyTrendData = [
  { date: "2023-05-01", current: 0.75, predicted: 0.78 },
  { date: "2023-05-02", current: 0.80, predicted: 0.82 },
  { date: "2023-05-03", current: 0.85, predicted: 0.86 },
  { date: "2023-05-04", current: 0.90, predicted: 0.88 },
  { date: "2023-05-05", current: 0.95, predicted: 0.92 },
  { date: "2023-05-06", current: 0.88, predicted: 0.90 },
  { date: "2023-05-07", current: 0.82, predicted: 0.85 },
]

// Demo data for Weekly Occupancy Overview
const weeklyOccupancyData = [
  { day: "Mon", current: 65, predicted: 70 },
  { day: "Tue", current: 75, predicted: 78 },
  { day: "Wed", current: 70, predicted: 72 },
  { day: "Thu", current: 80, predicted: 82 },
  { day: "Fri", current: 90, predicted: 92 },
  { day: "Sat", current: 95, predicted: 96 },
  { day: "Sun", current: 85, predicted: 88 },
]

// Demo data for Revenue Forecast
const revenueForecastData = [
  { date: "2023-05-01", actual: 10000, forecast: 11000 },
  { date: "2023-05-02", actual: 12000, forecast: 12500 },
  { date: "2023-05-03", actual: 11500, forecast: 12000 },
  { date: "2023-05-04", actual: 13000, forecast: 13500 },
  { date: "2023-05-05", actual: 14000, forecast: 14500 },
  { date: "2023-05-06", actual: 15000, forecast: 15200 },
  { date: "2023-05-07", actual: 13500, forecast: 14000 },
]

const todaysBookings = [
  { id: 1, roomType: "Standard", bookingPrice: 100, guestName: "John Doe" },
  { id: 2, roomType: "Deluxe", bookingPrice: 150, guestName: "Jane Smith" },
  { id: 3, roomType: "Suite", bookingPrice: 250, guestName: "Alice Johnson" },
  { id: 4, roomType: "Standard", bookingPrice: 100, guestName: "Bob Williams" },
  { id: 5, roomType: "Deluxe", bookingPrice: 150, guestName: "Charlie Brown" },
  { id: 6, roomType: "Suite", bookingPrice: 250, guestName: "Diana Clark" },
  { id: 7, roomType: "Standard", bookingPrice: 100, guestName: "Eva Davis" },
  { id: 8, roomType: "Deluxe", bookingPrice: 150, guestName: "Frank Miller" },
]

export default function RevenueInsights() {
  const [dateRange, setDateRange] = useState({ from: new Date(2023, 4, 1), to: new Date(2023, 4, 7) })
  const [occupancyThreshold, setOccupancyThreshold] = useState(70)
  const [revenueThreshold, setRevenueThreshold] = useState(12000)

  const averageCurrentOccupancy = weeklyOccupancyData.reduce((sum, day) => sum + day.current, 0) / weeklyOccupancyData.length
  const averagePredictedOccupancy = weeklyOccupancyData.reduce((sum, day) => sum + day.predicted, 0) / weeklyOccupancyData.length
  const totalRevenue = revenueForecastData.reduce((sum, day) => sum + day.actual, 0)
  const averageRevenue = totalRevenue / revenueForecastData.length

  const needsMarketingCampaign = averagePredictedOccupancy < occupancyThreshold || averageRevenue < revenueThreshold

  return (
    <div className="container mx-auto p-4 space-y-8">
      <h1 className="text-3xl font-bold">Revenue Insights</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Occupancy Threshold</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Input
                type="number"
                value={occupancyThreshold}
                onChange={(e) => setOccupancyThreshold(Number(e.target.value))}
                className="w-20"
              />
              <Label>%</Label>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Revenue Threshold</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Input
                type="number"
                value={revenueThreshold}
                onChange={(e) => setRevenueThreshold(Number(e.target.value))}
                className="w-32"
              />
              <Label>$ per day</Label>
            </div>
          </CardContent>
        </Card>
      </div>

      {needsMarketingCampaign && (
        <Card className="bg-yellow-100 dark:bg-yellow-900">
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="mr-2" />
              Marketing Campaign Needed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Predicted occupancy or revenue is below the threshold. Consider launching a marketing campaign to boost bookings.</p>
          </CardContent>
        </Card>
      )}

      <Tabs defaultValue="dynamic-pricing" className="space-y-4">
        <TabsList>
          <TabsTrigger value="dynamic-pricing">Dynamic Pricing</TabsTrigger>
          <TabsTrigger value="occupancy">Occupancy & Bookings</TabsTrigger>
          <TabsTrigger value="revenue">Revenue Projections</TabsTrigger>
        </TabsList>

        <TabsContent value="dynamic-pricing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Dynamic Pricing Overview</CardTitle>
              <CardDescription>AI-generated pricing rates and trends</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={{}} className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={dynamicPricingData}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line type="monotone" dataKey="standard" stroke="hsl(var(--chart-1))" strokeWidth={2} />
                    <Line type="monotone" dataKey="deluxe" stroke="hsl(var(--chart-2))" strokeWidth={2} />
                    <Line type="monotone" dataKey="suite" stroke="hsl(var(--chart-3))" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>AI Pricing Updates</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Recent 5% increase in standard room rates due to high seasonal demand</li>
                <li>Suite prices adjusted based on competitor analysis showing underpricing</li>
                <li>Weekday rates optimized for business traveler influx</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="occupancy" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Occupancy Calendar</CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="range"
                  selected={dateRange}
                  onSelect={(range) => {}}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Occupancy Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer config={{}} className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={occupancyTrendData}>
                      <XAxis dataKey="date" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Area type="monotone" dataKey="current" stroke="hsl(var(--chart-1))" fill="hsl(var(--chart-1))" fillOpacity={0.2} />
                      <Area type="monotone" dataKey="predicted" stroke="hsl(var(--chart-2))" fill="hsl(var(--chart-2))" fillOpacity={0.2} />
                    </AreaChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Weekly Occupancy Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={{}} className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weeklyOccupancyData}>
                    <XAxis dataKey="day" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="current" fill="hsl(var(--chart-1))" />
                    <Bar dataKey="predicted" fill="hsl(var(--chart-2))" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="revenue" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Revenue Forecast</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={{}} className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={revenueForecastData}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="actual" fill="hsl(var(--chart-1))" />
                    <Bar dataKey="forecast" fill="hsl(var(--chart-2))" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${totalRevenue.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">+20.1% from last week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Average Occupancy Rate</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{averageCurrentOccupancy.toFixed(1)}%</div>
                <p className="text-xs text-muted-foreground">Predicted: {averagePredictedOccupancy.toFixed(1)}%</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Average Daily Rate</CardTitle>
                <Hotel className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${(averageRevenue / averageCurrentOccupancy).toFixed(2)}</div>
                <p className="text-xs text-muted-foreground">+$10 from last week</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="w-full flex border-l p-4 space-x-4">
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Today's Bookings</CardTitle>
            <CardDescription>
              {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
              {todaysBookings.map((booking) => (
                <div key={booking.id} className="px-[70px] p-3 bg-muted rounded-lg">
                  <div className="font-semibold">{booking.guestName}</div>
                  <div className="text-sm text-muted-foreground">{booking.roomType}</div>
                  <div className="text-sm font-medium">${booking.bookingPrice}</div>
                </div>
              ))} 
            </div>
          </CardContent>
        </Card>
      </div>


      

    </div>
  )
}