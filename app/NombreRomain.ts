export class NombreRomain
{
    static convertirChiffreRomain(chiffreRomain: number) : string
    {
        let romains : string[] = ["I", "II"];

        return romains[chiffreRomain - 1];
    }
}