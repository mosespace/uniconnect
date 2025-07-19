"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Filter } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const courses = ["All Courses", "Computer Science", "Design", "Business", "Engineering", "Medicine", "Law"]
const years = ["All Years", "1st Year", "2nd Year", "3rd Year", "4th Year", "Graduate"]
const categories = ["All", "Developers", "Designers", "Mentors", "Entrepreneurs", "Researchers"]

export function TopStudentsFilters() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search top students..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 bg-muted/50"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="flex items-center space-x-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium">Filters:</span>
        </div>

        <Select defaultValue="all-courses">
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {courses.map((course) => (
              <SelectItem key={course} value={course.toLowerCase().replace(" ", "-")}>
                {course}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select defaultValue="all-years">
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {years.map((year) => (
              <SelectItem key={year} value={year.toLowerCase().replace(" ", "-")}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select defaultValue="rating">
          <SelectTrigger className="w-36">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="rating">Highest Rated</SelectItem>
            <SelectItem value="projects">Most Projects</SelectItem>
            <SelectItem value="endorsements">Most Endorsements</SelectItem>
            <SelectItem value="recent">Recently Active</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Category Tags */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <Badge
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            className="cursor-pointer hover:bg-primary/10 transition-colors"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Badge>
        ))}
      </div>
    </div>
  )
}
