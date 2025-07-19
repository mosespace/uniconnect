import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, Clock } from "lucide-react"

const challengeHistory = [
  {
    id: 1,
    date: "Today",
    title: "Share a helpful tip about your best skill",
    status: "pending",
    points: 50,
  },
  {
    id: 2,
    date: "Yesterday",
    title: "Help 3 students by answering their questions",
    status: "completed",
    points: 75,
  },
  {
    id: 3,
    date: "2 days ago",
    title: "Post a marketplace item to help fellow students",
    status: "completed",
    points: 40,
  },
  {
    id: 4,
    date: "3 days ago",
    title: "Give feedback on 5 student projects",
    status: "missed",
    points: 60,
  },
  {
    id: 5,
    date: "4 days ago",
    title: "Share your study resources with the community",
    status: "completed",
    points: 45,
  },
]

export function ChallengeHistory() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "missed":
        return <XCircle className="h-5 w-5 text-red-500" />
      case "pending":
        return <Clock className="h-5 w-5 text-yellow-500" />
      default:
        return null
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">Completed</Badge>
      case "missed":
        return <Badge className="bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400">Missed</Badge>
      case "pending":
        return (
          <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400">Pending</Badge>
        )
      default:
        return null
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Challenge History</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {challengeHistory.map((challenge) => (
          <div
            key={challenge.id}
            className="flex items-center space-x-4 p-4 rounded-lg border hover:bg-muted/50 transition-colors"
          >
            <div className="flex-shrink-0">{getStatusIcon(challenge.status)}</div>
            <div className="flex-1 min-w-0">
              <h4 className="font-medium truncate">{challenge.title}</h4>
              <p className="text-sm text-muted-foreground">{challenge.date}</p>
            </div>
            <div className="flex items-center space-x-3">
              {challenge.status === "completed" && (
                <span className="text-sm font-medium text-green-600">+{challenge.points} pts</span>
              )}
              {getStatusBadge(challenge.status)}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
