export class NombreRomain
{
    static convertirChiffreRomain(chiffreRomain: number) : string
    {
        let romains : string[] = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV"];

        return romains[chiffreRomain - 1];
    }
}