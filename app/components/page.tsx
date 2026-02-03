"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useLocalStorage } from "@/lib/hooks/useLocalStorage";
import { useDebounce } from "@/lib/hooks/useDebounce";
import { useMounted } from "@/lib/hooks/useMounted";
import { Mail, Trash2 } from "lucide-react";

export default function ComponentsDemoPage() {
  const isMounted = useMounted();
  const [storedValue, setStoredValue] = useLocalStorage("demo-key", "Hello World");
  const [inputValue, setInputValue] = React.useState("");
  const debouncedValue = useDebounce(inputValue, 500);

  if (!isMounted) return null;

  return (
    <div className="container mx-auto py-10 space-y-10 max-w-5xl px-4">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">组件展示库</h1>
        <p className="text-gray-500">展示项目中所有基础组件和 Hook 的使用示例。</p>
      </div>

      {/* Buttons */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b pb-2">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>
        <div className="flex flex-wrap gap-4 items-center">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon"><Trash2 className="h-4 w-4" /></Button>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button isLoading>Loading</Button>
          <Button disabled>Disabled</Button>
          <Button>
            <Mail className="mr-2 h-4 w-4" /> Login with Email
          </Button>
        </div>
      </section>

      {/* Inputs */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b pb-2">Inputs</h2>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Input type="email" placeholder="Email" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Input type="text" placeholder="Disabled input" disabled />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Input
            placeholder="Try typing for debounce demo..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <p className="text-sm text-gray-500">Debounced value: {debouncedValue}</p>
        </div>
      </section>

      {/* Cards */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b pb-2">Cards</h2>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>Deploy your new project in one-click.</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Input id="name" placeholder="Name of your project" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Deploy</Button>
          </CardFooter>
        </Card>
      </section>

      {/* Hooks */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b pb-2">Hooks</h2>
        <Card>
          <CardHeader>
            <CardTitle>useLocalStorage</CardTitle>
            <CardDescription>
              Persist state across page reloads. Modify the input below and refresh the page.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <Input
                value={typeof storedValue === "string" ? storedValue : ""}
                onChange={(e) => setStoredValue(e.target.value)}
                className="max-w-sm"
              />
              <span className="text-sm text-gray-500">Current Value: {typeof storedValue === "string" ? storedValue : JSON.stringify(storedValue)}</span>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
