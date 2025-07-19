import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

const skills = [
  {
    id: 1,
    student: {
      name: "Emma Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      year: "4th Year",
      verified: true,
    },
    skill: "UI/UX Design",
    description: "Creating beautiful and user-friendly interfaces for web and mobile apps",
    rating: 4.8,
    reviews: 32,
    price: 35,
    tags: ["Figma", "Adobe XD", "Prototyping"],
  },
  {
    id: 2,
    student: {
      name: "Marcus Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      year: "3rd Year",
      verified: false,
    },
    skill: "Python Programming",
    description: "Data science, web development, and automation scripts using Python",
    rating: 4.9,
    reviews: 28,
    price: 25,
    tags: ["Django", "Data Science", "Machine Learning"],
  },
  {
    id: 3,
    student: {
      name: "Sofia Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
      year: "2nd Year",
      verified: true,
    },
    skill: "Spanish Tutoring",
    description: "Native Spanish speaker offering conversation practice and grammar lessons",
    rating: 5.0,
    reviews: 45,
    price: 20,
    tags: ["Conversation", "Grammar", "Business Spanish"],
  },
]

export function SkillsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {skills.map((skill) => (
        <Card key={skill.id} className="hover:shadow-lg transition-shadow">
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-3">
              <Avatar className="h-12 w-12">
                <AvatarImage src={skill.student.avatar || "/placeholder.svg"} alt={skill.student.name} />
                <AvatarFallback>
                  {skill.student.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h3 className="font-semibold">{skill.student.name}</h3>
                  {skill.student.verified && (
                    <Badge variant="secondary" className="h-4 text-xs">
                      ✓
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{skill.student.year}</p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            <div>
              <CardTitle className="text-lg mb-2">{skill.skill}</CardTitle>
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </div>

            <div className="flex flex-wrap gap-1">
              {skill.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{skill.rating}</span>
                <span className="text-sm text-muted-foreground">({skill.reviews})</span>
              </div>
              <span className="text-lg font-bold">${skill.price}/hr</span>
            </div>

            <Button className="w-full">Hire Now</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
