
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";

interface DevotionalCardProps {
  id: string;
  title: string;
  excerpt: string;
  scripture: string;
  date: string;
  imageUrl: string;
}

const DevotionalCard = ({ id, title, excerpt, scripture, date, imageUrl }: DevotionalCardProps) => {
  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-md h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-center text-sm text-devotional-500 mb-2">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{date}</span>
        </div>
        <h3 className="font-cormorant text-xl font-semibold text-devotional-800 line-clamp-2">
          {title}
        </h3>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-devotional-600 line-clamp-3 mb-2">
          {excerpt}
        </p>
        <p className="text-sm italic text-devotional-700">
          <span className="scripture-reference">{scripture}</span>
        </p>
      </CardContent>
      <CardFooter className="pt-2">
        <Button asChild className="w-full bg-devotional-600 hover:bg-devotional-700">
          <Link to={`/devotionals/${id}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DevotionalCard;
