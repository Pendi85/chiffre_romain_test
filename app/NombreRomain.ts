export class NombreRomain
{
    static convertirChiffreRomain(chiffreRomain: number) : string
    {
        let romains : string[] = ["I"];

        return romains[chiffreRomain - 1];
    }
}