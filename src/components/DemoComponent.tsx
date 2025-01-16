import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Sparkles, Send, BookOpen } from 'lucide-react';

const DemoComponent = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      category: "",
      level: [50],
      notifications: false,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-5xl p-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
            Démonstration shadcn/ui
          </h1>
          <p className="text-slate-600">
            Une collection de composants élégants et accessibles.
          </p>
        </div>

        <Tabs defaultValue="formulaire" className="space-y-6">
          <TabsList className="inline-flex bg-slate-100 p-1 rounded-lg">
            <TabsTrigger 
              value="formulaire" 
              className="rounded-md px-6 py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Formulaire
              </div>
            </TabsTrigger>
            <TabsTrigger 
              value="docs" 
              className="rounded-md px-6 py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Documentation
              </div>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="formulaire">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle>Formulaire de test</CardTitle>
                <CardDescription>
                  Explorez les différents composants de formulaire avec validation intégrée.
                </CardDescription>
              </CardHeader>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <CardContent className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">Nom</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Entrez votre nom" 
                              className="border-slate-200" 
                              {...field} 
                            />
                          </FormControl>
                          <FormDescription className="text-sm text-slate-500">
                            Votre nom complet tel qu'il apparaîtra sur votre profil.
                          </FormDescription>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">Catégorie</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="border-slate-200">
                                <SelectValue placeholder="Sélectionnez une catégorie" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="design">Design</SelectItem>
                              <SelectItem value="development">Développement</SelectItem>
                              <SelectItem value="marketing">Marketing</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormDescription className="text-sm text-slate-500">
                            Choisissez la catégorie qui correspond le mieux à votre projet.
                          </FormDescription>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="level"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">Niveau d'expertise</FormLabel>
                          <FormControl>
                            <div className="space-y-2">
                              <Slider
                                max={100}
                                step={1}
                                value={field.value}
                                onValueChange={field.onChange}
                                className="py-4"
                              />
                              <p className="text-right text-sm text-slate-500">
                                {field.value}%
                              </p>
                            </div>
                          </FormControl>
                          <FormDescription className="text-sm text-slate-500">
                            Évaluez votre niveau d'expertise dans la catégorie choisie.
                          </FormDescription>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="notifications"
                      render={({ field }) => (
                        <FormItem>
                          <div className="flex items-center justify-between rounded-lg border border-slate-200 p-4">
                            <div className="space-y-1">
                              <FormLabel className="text-sm font-medium">Notifications</FormLabel>
                              <FormDescription className="text-sm text-slate-500">
                                Recevez des notifications sur l'avancement de votre projet.
                              </FormDescription>
                            </div>
                            <FormControl>
                              <Switch
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                          </div>
                        </FormItem>
                      )}
                    />
                  </CardContent>

                  <CardFooter>
                    <Button 
                      type="submit" 
                      className="ml-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Envoyer
                    </Button>
                  </CardFooter>
                </form>
              </Form>
            </Card>
          </TabsContent>

          <TabsContent value="docs">
            <Card>
              <CardHeader>
                <CardTitle>Documentation</CardTitle>
                <CardDescription>
                  Guide d'utilisation des composants shadcn/ui
                </CardDescription>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>
                  shadcn/ui est une collection de composants réutilisables construits avec Radix UI et Tailwind CSS.
                  Ces composants sont hautement personnalisables et accessibles par défaut.
                </p>
                <h3>Caractéristiques principales</h3>
                <ul>
                  <li>Composants accessibles et réutilisables</li>
                  <li>Stylisation avec Tailwind CSS</li>
                  <li>Thème personnalisable</li>
                  <li>Support du mode sombre</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DemoComponent;