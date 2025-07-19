import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, TrendingUp, Gift } from "lucide-react"

const verifiedStudents = [
  {
    name: "Michael Zhang",
    course: "Engineering",
    year: "4th Year",
    avatar: "/placeholder.svg?height=40&width=40",
    bio: "Full-stack developer & tutor",
  },
  {
    name: "Jessica Park",
    course: "Design",
    year: "3rd Year",
    avatar: "/placeholder.svg?height=40&width=40",
    bio: "UI/UX designer & mentor",
  },
  {
    name: "David Wilson",
    course: "Business",
    year: "4th Year",
    avatar: "/placeholder.svg?height=40&width=40",
    bio: "Marketing expert & consultant",
  },
]

const topSkills = [
  { name: "Web Development", count: 45, trending: true },
  { name: "Graphic Design", count: 32, trending: false },
  { name: "Math Tutoring", count: 28, trending: true },
  { name: "Language Exchange", count: 24, trending: false },
  { name: "Photography", count: 19, trending: true },
]

export function RightSidebar() {
  return (
    <div className="p-4 space-y-6">
      {/* Verified Students */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center space-x-2">
            <Star className="h-5 w-5 text-yellow-500" />
            <span>Verified Students</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {verifiedStudents.map((student, index) => (
            <div key={index} className="flex items-center space-x-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={student.avatar || "/placeholder.svg"} alt={student.name} />
                <AvatarFallback>
                  {student.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-1">
                  <p className="text-sm font-medium truncate">{student.name}</p>
                  <Badge variant="secondary" className="h-4 text-xs">
                    ✓
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">
                  {student.course} • {student.year}
                </p>
                <p className="text-xs text-muted-foreground truncate">{student.bio}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Top Skills Today */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-green-500" />
            <span>Top Skills Today</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {topSkills.map((skill, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">{skill.name}</span>
                {skill.trending && (
                  <Badge variant="outline" className="h-4 text-xs text-green-600 border-green-600">
                    🔥
                  </Badge>
                )}
              </div>
              <span className="text-xs text-muted-foreground">{skill.count}</span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Daily Challenge */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Daily Challenge</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-3">Complete today's challenge to earn 50 points!</p>
          <p className="text-sm font-medium mb-3">"Help 3 fellow students by answering their questions"</p>
          <Button size="sm" className="w-full">
            Start Challenge
          </Button>
        </CardContent>
      </Card>

      {/* Spin & Win */}
      <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center space-x-2">
            <Gift className="h-5 w-5 text-orange-500" />
            <span>Spin & Win</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-3">Daily free spin available!</p>
          <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
            <Gift className="h-8 w-8 text-white" />
          </div>
          <Button size="sm" className="w-full bg-transparent" variant="outline">
            Spin Now!
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
