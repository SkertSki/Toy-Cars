// import the classes
import Truck from "../classes/TruckDONE.js";
import Motorbike from "../classes/MotorbikeDONE.js";
import Car from "../classes/CarDONE.js";

// define the interface
interface AbleToTow {
    // declare the properties
    towingCapacity: number;
    // tow method takes a truck or a motorbike or a car as an argument
    tow(vehicle: Truck | Motorbike | Car): void;
}

// export the interface
export default AbleToTow;
