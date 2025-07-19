import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Trophy, Award, MessageCircle, UserPlus } from "lucide-react"

const topStudents = [
  {
    id: 1,
    rank: 1,
    name: "Sarah Chen",
    avatar: "/placeholder.svg?height=80&width=80",
    course: "Computer Science",
    year: "4th Year",
    badge: "Top Developer",
    badgeColor: "from-purple-500 to-pink-500",
    rating: 4.9,
    reviews: 127,
    skills: ["React", "Node.js", "Python"],
    projects: 45,
    endorsements: 89,
    verified: true,
  },
  {
    id: 2,
    rank: 2,
    name: "Marcus Johnson",
    avatar: "/placeholder.svg?height=80&width=80",
    course: "Design",
    year: "3rd Year",
    badge: "Top Designer",
    badgeColor: "from-blue-500 to-cyan-500",
    rating: 4.8,
    reviews: 98,
    skills: ["UI/UX", "Figma", "Branding"],
    projects: 38,
    endorsements: 76,
    verified: true,
  },
  {
    id: 3,
    rank: 3,
    name: "Emma Rodriguez",
    avatar: "/placeholder.svg?height=80&width=80",
    course: "Business",
    year: "4th Year",
    badge: "Top Mentor",
    badgeColor: "from-green-500 to-emerald-500",
    rating: 4.9,
    reviews: 156,
    skills: ["Marketing", "Strategy", "Leadership"],
    projects: 52,
    endorsements: 94,
    verified: true,
  },
  {
    id: 4,
    rank: 4,
    name: "Alex Thompson",
    avatar: "/placeholder.svg?height=80&width=80",
    course: "Engineering",
    year: "3rd Year",
    badge: "Rising Star",
    badgeColor: "from-orange-500 to-red-500",
    rating: 4.7,
    reviews: 67,
    skills: ["CAD", "3D Modeling", "Prototyping"],
    projects: 29,
    endorsements: 58,
    verified: false,
  },
]

export function TopStudentsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {topStudents.map((student) => (
        <Card
          key={student.id}
          className="relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
        >
          {/* Rank Badge */}
          <div className="absolute top-4 left-4 z-10">
            <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-white font-bold text-sm shadow-lg">
              #{student.rank}
            </div>
          </div>

          {/* Background Gradient */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${student.badgeColor} opacity-5 group-hover:opacity-10 transition-opacity`}
          />

          <CardContent className="p-6 space-y-4">
            {/* Profile Section */}
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="relative">
                <Avatar className="h-20 w-20 border-4 border-background shadow-lg">
                  <AvatarImage src={student.avatar || "/placeholder.svg"} alt={student.name} />
                  <AvatarFallback className="text-lg">
                    {student.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                {student.rank <= 3 && (
                  <div className="absolute -top-1 -right-1">
                    <Trophy className="h-6 w-6 text-yellow-500 drop-shadow-lg" />
                  </div>
                )}
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-center space-x-2">
                  <h3 className="font-bold text-lg">{student.name}</h3>
                  {student.verified && (
                    <Badge variant="secondary" className="h-4 text-xs">
                      ✓
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  {student.course} • {student.year}
                </p>
              </div>

              {/* Badge */}
              <Badge className={`bg-gradient-to-r ${student.badgeColor} text-white border-0 px-3 py-1`}>
                <Award className="h-3 w-3 mr-1" />
                {student.badge}
              </Badge>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="space-y-1">
                <div className="flex items-center justify-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{student.rating}</span>
                </div>
                <p className="text-xs text-muted-foreground">{student.reviews} reviews</p>
              </div>
              <div className="space-y-1">
                <p className="font-semibold text-lg">{student.projects}</p>
                <p className="text-xs text-muted-foreground">Projects</p>
              </div>
              <div className="space-y-1">
                <p className="font-semibold text-lg">{student.endorsements}</p>
                <p className="text-xs text-muted-foreground">Endorsements</p>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-2">
              <p className="text-sm font-medium">Top Skills</p>
              <div className="flex flex-wrap gap-1">
                {student.skills.map((skill, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-2 pt-2">
              <Button className="flex-1" size="sm">
                <MessageCircle className="h-4 w-4 mr-2" />
                Message
              </Button>
              <Button variant="outline" size="sm">
                <UserPlus className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
