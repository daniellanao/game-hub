
import { Card, CardBody, Heading, Skeleton, SkeletonText } from "@chakra-ui/react"

export const GameCardSkeleton = () => {
  return (
    <Card>
        <Skeleton height="200px"></Skeleton>
        <CardBody>
            <SkeletonText />        
        </CardBody>
    </Card>
  )
}