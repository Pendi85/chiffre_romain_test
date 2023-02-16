export class NombreRomain
{
    static convertirChiffreRomain(chiffreRomain: number) : string
    {
        let romains : string[] = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

        return romains[chiffreRomain - 1];
    }
}