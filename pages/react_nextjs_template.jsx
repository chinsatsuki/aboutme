import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLocalStorage } from "@/lib/hooks/useLocalStorage";
import { ToolUtils } from "@/lib/utils/toolUtils";
import Link from "next/link";

export default function Home() {
  const [name, setName] = useLocalStorage("name", "");

  return (
    <div className="p-4 space-y-4">
      <Card>
        <CardContent className="space-y-2">
          <h1 className="text-xl font-bold">Welcome to Minimal Template</h1>
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
          <Button onClick={() => alert(`Hello, ${name}!`)}>Greet</Button>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <p>Random Tool Value: {ToolUtils.generateId()}</p>
        </CardContent>
      </Card>

      <Link href="/components">View all components</Link>
    </div>
  );
}