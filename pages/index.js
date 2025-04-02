import React from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";



export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold mb-4">Zjistěte, kdo vám volá</h1>
        <p className="text-gray-600 mb-8">
          Okamžité reverzní vyhledávání telefonních čísel a e-mailů z veřejných zdrojů.
        </p>
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <Input
              placeholder="Zadejte telefonní číslo nebo e-mail"
              className="mb-4"
            />
            <Button className="w-full">Vyhledat</Button>
          </CardContent>
        </Card>
        <p className="text-sm text-gray-500 mt-4">
          První výsledek zdarma. Podrobnosti k dispozici po zaplacení.
        </p>
      </div>
    </div>
  );
}
