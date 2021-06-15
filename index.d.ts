/*
    Add global variables here.
*/

type Json =
| string
| number
| boolean
| null
| { [property: string]: Json }
| Json[]