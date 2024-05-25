import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Cross } from "lucide-react";
import { Button } from "./ui/button";

type SiteMapModalProps = {
    setSiteMap: (value: boolean) => void;
};

export const SiteMapModal = ({ setSiteMap }: SiteMapModalProps) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
            <Card className="w-full max-w-lg">
                <CardHeader className="flex flex-row justify-between items-center">
                    <CardTitle className="text-primary text-2xl font-bold">Plan du site</CardTitle>
                    <Cross onClick={() => setSiteMap(false)} className="cursor-pointer rotate-45 text-primary" />
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-2">
                    <Button className="font-bold text-black" variant="link"><Link href={"/"}>Accueil</Link></Button>
                    <Button className="font-bold text-black" variant="link"><Link href={"/podologie"}>Podologie</Link></Button>
                    <Button className="font-bold text-black" variant="link"><Link href={"/podologie-du-sport"}>Podologie du sport</Link></Button>
                    <Button className="font-bold text-black" variant="link"><Link href={"/podo-pediatrie"}>Podo pédiatrie</Link></Button>
                    <Button className="font-bold text-black" variant="link"><Link href={"/posturologie"}>Posturologie</Link></Button>
                    <Button className="font-bold text-black" variant="link"> <Link href={"/pedicurie"}>Pédicurie</Link></Button>
                    <Button className="font-bold text-black" variant="link"> <Link href={"/appareillage"}>Appareillage</Link></Button>
                    <Button className="font-bold text-black" variant="link"> <Link href={"/le-cabinet"}>Le cabinet</Link></Button>
                    <Button className="font-bold text-black" variant="link"> <Link href={"/legal-notice"}>Mentions légales</Link></Button>
                    <Button className="font-bold text-black" variant="link"><Link href={"/privacy-policy"}>Politique de confidentialité</Link></Button>
                </CardContent>
            </Card>
        </div>
    );
};