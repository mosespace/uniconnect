import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Gift, Calendar } from "lucide-react"

const rewardHistory = [
  {
    id: 1,
    date: "Yesterday",
    reward: "Profile Boost",
    type: "boost",
    claimed: true,
  },
  {
    id: 2,
    date: "2 days ago",
    reward: "100 Points",
    type: "points",
    claimed: true,
  },
  {
    id: 3,
    date: "3 days ago",
    reward: "Discount Code",
    type: "discount",
    claimed: false,
  },
  {
    id: 4,
    date: "5 days ago",
    reward: "Skill Badge",
    type: "badge",
    claimed: true,
  },
]

export function RewardHistory() {
  const getRewardIcon = (type: string) => {
    return <Gift className="h-4 w-4" />
  }

  const getRewardColor = (type: string) => {
    switch (type) {
      case "points":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
      case "boost":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400"
      case "discount":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
      case "badge":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Calendar className="h-5 w-5" />
          <span>Reward History</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {rewardHistory.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-muted rounded-full">{getRewardIcon(item.type)}</div>
              <div>
                <h4 className="font-medium">{item.reward}</h4>
                <p className="text-sm text-muted-foreground">{item.date}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge className={getRewardColor(item.type)}>{item.reward}</Badge>
              {!item.claimed && (
                <Badge variant="outline" className="text-orange-600 border-orange-600">
                  Unclaimed
                </Badge>
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
