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
                    <Button className="font-bold text-black" variant="link"><Link href={"/"} aria-label="Accueil">Accueil</Link></Button>
                    <Button className="font-bold text-black" variant="link"><Link href={"/podologie"} aria-label="Podologie">Podologie</Link></Button>
                    <Button className="font-bold text-black" variant="link"><Link href={"/podologie-du-sport"} aria-label="Podologie du sport">Podologie du sport</Link></Button>
                    <Button className="font-bold text-black" variant="link"><Link href={"/podo-pediatrie"} aria-label="Podo pédiatrie">Podo pédiatrie</Link></Button>
                    <Button className="font-bold text-black" variant="link"><Link href={"/posturologie"} aria-label="Posturologie">Posturologie</Link></Button>
                    <Button className="font-bold text-black" variant="link"> <Link href={"/pedicurie"} aria-label="Pédicurie">Pédicurie</Link></Button>
                    <Button className="font-bold text-black" variant="link"> <Link href={"/appareillage"} aria-label="Appareillage">Appareillage</Link></Button>
                    <Button className="font-bold text-black" variant="link"> <Link href={"/le-cabinet"} aria-label="Le cabinet">Le cabinet</Link></Button>
                    <Button className="font-bold text-black" variant="link"> <Link href={"/legal-notice"} aria-label="Mentions légales">Mentions légales</Link></Button>
                    <Button className="font-bold text-black" variant="link"><Link href={"/privacy-policy"} aria-label="Politique de confidentialité">Politique de confidentialité</Link></Button>
                </CardContent>
            </Card>
        </div>
    );
};