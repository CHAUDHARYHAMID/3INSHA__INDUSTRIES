import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";


const ProductsSection = () => {
    const offerings = [
        {
            category: "Gate Valves",
            description: "Designed for on-off services, gate valves provide a tight seal and minimal pressure drop when fully open. Ideal for applications where flow needs to be completely shut off or allowed with minimal resistance.",
            materials: "Cast carbon steel, forged carbon steel, stainless steel, cast iron, and alloy steel.",
            sizesAndClasses: "Available in sizes from 2'' to 24'' and pressure classes of 150#, 300#, 600#, 900#, and 1500#.",
            subCategories: [
                {
                    title: "Flanged End Gate Valve",
                    description: "Ideal for applications requiring full flow with minimal pressure drop, flanged end gate valves are used in water supply systems, sewage treatment, and oil and gas pipelines. They are designed for easy installation and maintenance. Our Flanged End Gate Valve are available in different sizes in order to fulfil clients' requirement. The specifications of flanged end are as follows:",
                    specs: [
                        { key: "Type", value: "Bolted Bonnet O. S. & Y Type Rising Stem" },
                        { key: "Size", value: "50mm to 600 mm" },
                        { key: "Pressure Rating", value: "150, 300, 600, 900, 1500" },
                        { key: "Design & Mfg. Standard", value: "API 600 / BS 1414" },
                        { key: "Inspection & Testing Standard", value: "API 598" },
                        { key: "Body Material", value: "WCB, Cast Iron, CF8, CF8M, Alloy 20" },
                        { key: "Trim Materials", value: "13% Cr. Stellited, AISI 304/316/Monel" },
                        { key: "End Connection", value: "Flanged as per ANSI B 16.5 / B 16.25" },
                        { key: "Face to Face Dimension", value: "ANSI B 16.10" },
                        { key: "Optional", value: "Manual gearbox or motorised Operation" },
                    ]
                },
                {
                    title: "Butt Weld End",
                    description: "Used in applications requiring a permanent, leak-proof joint, butt weld end gate valves are common in petrochemical, power generation, and refinery industries. They provide excellent strength and durability.",
                    specs: [
                        { key: "Type", value: "Bolted Bonnet O. S. & Y Type Rising Stem" },
                        { key: "Size", value: "50mm to 600 mm" },
                        { key: "Pressure Rating", value: "150, 300, 600, 900, 1500" },
                        { key: "Design & Mfg. Standard", value: "API 600 / BS 1414" },
                        { key: "Inspection & Testing Standard", value: "API 598" },
                        { key: "Body Material", value: "WCB, CF8, CF8M, Alloy 20" },
                        { key: "Trim Materials", value: "13% Cr. Stellited, AISI 304/316/Monel" },
                        { key: "End Connection", value: "Butt Weld as per ANSI B 16.5 / B 16.25" },
                        { key: "Face to Face Dimension", value: "ANSI B 16.10" },
                        { key: "Optional", value: "Manual gearbox or motorised Operation" },
                    ]
                }
            ]
        },
        {
            category: "Globe Valves",
            description: "Perfect for throttling and flow regulation, globe valves offer precise control and shutoff capabilities. They are essential for applications requiring accurate flow modulation.",
            materials: "Cast carbon steel, forged carbon steel, stainless steel, cast iron, and alloy steel.",
            sizesAndClasses: "Available in sizes from 1'' to 24'' and pressure classes of 150#, 300#, 600#, 900#, and 1500#.",
            subCategories: [
                {
                    title: "Flanged End Globe Valve",
                    description: "Known for their precise throttling capabilities, flanged end globe valves are used in HVAC systems, chemical processing, and power plants. They ensure accurate flow control and are easy to maintain. Available in the following specifications:",
                    specs: [
                        { key: "Type", value: "Bolted Bonnet O.S. & Y Type Rising Stem" },
                        { key: "Size", value: "25mm to 600 mm" },
                        { key: "Pressure Rating", value: "150, 300, 600, 900, 1500" },
                        { key: "Design & Mfg. Standard", value: "BS 1873" },
                        { key: "Inspection & Testing Standard", value: "API 598 / BS 6755 Part-1" },
                        { key: "Body Material", value: "WCB, Cast Iron, CF8, CF8M, Alloy 20" },
                        { key: "Trim Materials", value: "13% Cr. Stellited, AISI 304/316/Monel" },
                        { key: "End Connection", value: "Flanged as per ANSI B 16.5 / B 16.25" },
                        { key: "Face to Face Dimension", value: "ANSI B 16.10" },
                        { key: "Optional", value: "Manual gearbox or motorised operation." },
                    ]
                },
                {
                    title: "Butt Weld End",
                    description: "Suitable for high-pressure applications, butt weld end globe valves provide a reliable, leak-proof connection. They are commonly used in oil and gas, chemical processing, and power generation industries.",
                    specs: [
                        { key: "Type", value: "Bolted Bonnet O. S. & Y Type Rising Stem" },
                        { key: "Size", value: "25mm to 500 mm" },
                        { key: "Pressure Rating", value: "150, 300, 600, 900, 1500" },
                        { key: "Design & Mfg. Standard", value: "BS 1873" },
                        { key: "Inspection & Testing Standard", value: "API 598 / BS 6755 Part-1" },
                        { key: "Body Material", value: "WCB, CF8, CF8M, Alloy 20" },
                        { key: "Trim Materials", value: "13% Cr. Stellited, AISI 304/316/Monel" },
                        { key: "End Connection", value: "Butt Weld as per ANSI B 16.5 / B 16.25" },
                        { key: "Face to Face Dimension", value: "ANSI B 16.10" },
                        { key: "Optional", value: "Manual gearbox or motorised operation." },
                    ]
                }
            ]
        },
        {
            category: "Forged Steel Valves",
            description: "",
            materials: "",
            sizesAndClasses: "",
            subCategories: [
                {
                    title: "Gate Valves: Screwed/Socket Weld End",
                    description: "Known for their strength and durability, used in high-pressure and high-temperature applications. These gate valves are perfect for smaller pipelines and applications where space is limited. They offer a secure and leak-proof connection.",
                    specs: [
                        { key: "Material", value: "Cast carbon steel, forged carbon steel, stainless steel, cast iron, and alloy steel." },
                        { key: "Size", value: "1/2\" to 2\"" },
                        { key: "Classes", value: "150, 300, 600, 800, 1500, 2500" },
                        { key: "Type", value: "Forged Steel Gate Valve" },
                        { key: "Design & Mfg. Standard", value: "API 602 (Gate) BS 5352" },
                        { key: "Inspection & Testing Standard", value: "API 598, BS 5146" },
                        { key: "Body Material", value: "ASTM A 105, A182 F304 F316" },
                        { key: "Trim Materials", value: "AISI 410 / 304 / 316, Stellited Monel" },
                        { key: "End Connection", value: "Screwed, Socket Welded as per ANSI B 16.11 or Welded Flanges as per ANSI B 16.5 in class 150, 300, 600" },
                    ]
                },
                {
                    title: "Globe Valves: Screwed/Socket Weld End",
                    description: "Provides precise flow control and robust performance in demanding environments. These globe valves are ideal for smaller systems where precise flow regulation is critical. They are used in fuel handling, water treatment, and various industrial processes.",
                    specs: [
                        { key: "Material", value: "Cast carbon steel, forged carbon steel, stainless steel, cast iron, and alloy steel." },
                        { key: "Size", value: "1/2\" to 2\"" },
                        { key: "Classes", value: "150, 300, 600, 800, 1500, 2500" },
                        { key: "Type", value: "Forged Steel Globe Valve" },
                        { key: "Design & Mfg. Standard", value: "API 602 BS 5352" },
                        { key: "Inspection & Testing Standard", value: "API 598, BS 5146" },
                        { key: "Body Material", value: "ASTM A 105, A182 F304 F316" },
                        { key: "Trim Materials", value: "AISI 410 / 304 / 316, Stellited Monel" },
                        { key: "End Connection", value: "Screwed, Socket Welded as per ANSI B 16.11 or Welded Flanges as per ANSI B 16.5 in class 150, 300, 600" },
                    ]
                },
                {
                    title: "Check Valves OR Non-Return Valve: Forged Steel",
                    description: "Prevents backflow and ensures unidirectional flow in pipelines. These valves are designed for high-pressure and high-temperature applications. They are used in power plants, petrochemical industries, and oil and gas pipelines for their durability and reliability.",
                    specs: [
                        { key: "Material", value: "Cast carbon steel, forged carbon steel, stainless steel, cast iron, and alloy steel." },
                        { key: "Size", value: "1/2\" to 2\"" },
                        { key: "Classes", value: "150, 300, 600, 800, 1500, 2500" },
                        { key: "Type", value: "Forged Steel Check Valve" },
                        { key: "Design & Mfg. Standard", value: "API 602 (Gate) BS 5352" },
                        { key: "Inspection & Testing Standard", value: "API 598, BS 5146" },
                        { key: "Body Material", value: "ASTM A 105, A182 F304 F316" },
                        { key: "Trim Materials", value: "AISI 410 / 304 / 316, Stellited Monel" },
                        { key: "End Connection", value: "Screwed, Socket Welded as per ANSI B 16.11 or Welded Flanges as per ANSI B 16.5 in class 150, 300, 600" },
                    ]
                }
            ]
        },
        {
            category: "Non-Return Valves",
            description: "Also known as check valves, they prevent backflow in pipelines, ensuring a unidirectional flow. Essential for protecting pumps and other equipment from reverse flow.",
            materials: "Cast carbon steel, forged carbon steel, stainless steel, cast iron, and alloy steel.",
            sizesAndClasses: "Available in sizes from 2'' to 24'' and pressure classes of 150#, 300#, 600#, 900#, and 1500#.",
            subCategories: [
                {
                    title: "Swing Type Valve",
                    description: "Used to prevent backflow in piping systems, swing type non-return valves are common in water distribution, sewage systems, and industrial processes. They offer low-pressure drop and reliable operation. Specifications of swing type valves are as under:",
                    specs: [
                        { key: "Type", value: "Swing Type" },
                        { key: "Size", value: "50mm to 600 mm" },
                        { key: "Pressure Rating", value: "150, 300, 600, 900, 1500" },
                        { key: "Design & Mfg. Standard", value: "BS-1868" },
                        { key: "Inspection & Testing Standard", value: "API 598 / BS 6755" },
                        { key: "Body Material", value: "WCB, Cast Iron, CF8, CF8M, Alloy 20" },
                        { key: "Trim Materials", value: "13% Cr. Stellited, AISI 304/316/Monel" },
                        { key: "End Connection", value: "Flanged as per ANSI B 16.5 / B 16.25" },
                        { key: "Face to Face Dimension", value: "ANSI B 16.10" },
                    ]
                },
                {
                    title: "Lift Type Valve",
                    description: "Ideal for applications where frequent flow reversal occurs, lift type non-return valves are used in water supply, chemical processing, and steam systems. They provide quick and efficient flow reversal prevention. The range of lift type valves is available in following options:",
                    specs: [
                        { key: "Type", value: "Lift Type" },
                        { key: "Size", value: "50mm to 600 mm" },
                        { key: "Pressure Rating", value: "150, 300, 600, 900, 1500" },
                        { key: "Design & Mfg. Standard", value: "BS-1868" },
                        { key: "Inspection & Testing Standard", value: "API 598 / BS 6755" },
                        { key: "Body Material", value: "WCB, Cast Iron, CF8, CF8M, Alloy 20" },
                        { key: "Trim Materials", value: "13% Cr. Stellited, AISI 304/316/Monel" },
                        { key: "End Connection", value: "Flanged as per ANSI B 16.5 / B 16.25" },
                        { key: "Face to Face Dimension", value: "ANSI B 16.10" },
                    ]
                }
            ]
        },
        {
            category: "Control Valves",
            description: "Designed for modulating flow and pressure in process systems, control valves provide precise regulation and automation of fluid dynamics.",
            materials: "Cast carbon steel, forged carbon steel, stainless steel, cast iron, and alloy steel.",
            sizesAndClasses: "Available in sizes from ½'' to 8'' and pressure classes of 150#, 300# and 600#.",
            subCategories: [
                {
                    title: "Single Seated / Double Seated",
                    description: "These control valves are used for accurate flow control in process industries, including chemical processing, pharmaceuticals, and food and beverage production. They ensure stable and efficient operation.",
                    specs: [
                        { key: "Type", value: "Single / Double Seated Control Valve" },
                        { key: "Size", value: "From 1/2\" to 8\" for single seated & 1\" to 12\" for Double Seated" },
                        { key: "Pressure Rating", value: "Class 150, 300, 600" },
                        { key: "Design Pressure", value: "Up to 900 PSIG" },
                        { key: "Design temperature", value: "Up to 100 Dig. C to 850 Dig. C" },
                        { key: "Body Material", value: "C. S., SS 304, SS 316, Alloy 20, Monnel" },
                        { key: "Trim Materials", value: "AISI 410 / 304 / 316" },
                        { key: "End Connection", value: "Screwed upto 2\" Socket Weld End up to 3\" Flanged confirming to ANSI, DIN,IS,BS" },
                        { key: "Actuator Type", value: "Spring Diaphragm Cylinder" },
                        { key: "Characteristics", value: "Quick-Opening. Equal Percentage & Linear" },
                        { key: "Bellows Seal", value: "Stainless Steel & PTFE" },
                        { key: "Packing", value: "Teflon, Teflon Asbestos Graphited asbestos" },
                    ]
                },
                {
                    title: "Diaphragm Operated Butterfly Valve",
                    description: "Used for on/off and throttling service, these valves are common in water treatment, HVAC, and food processing industries. They offer precise control and easy operation. Robustly constructed, our Diaphragm operated Butterfly valves are available at the most competitive prices.",
                    specs: [
                        { key: "Type", value: "Diaphragm Operated Butterfly Valve" },
                        { key: "Size", value: "From 2\" to 36\"" },
                        { key: "Design Pressure", value: "Up to 600 lbs" },
                        { key: "Design temperature", value: "Up to 650 Dig. C" },
                        { key: "Body Material", value: "C. I.,C. S., SS 304, SS 316, Alloy 20, Monnel" },
                        { key: "Trim Materials", value: "AISI 410 / 304 / 316" },
                        { key: "End Connection", value: "Wafer Type Design" },
                        { key: "Actuator Type", value: "Spring Diaphragm Cylinder" },
                    ]
                }
            ]
        },
        {
            category: "Ball Valves",
            description: "Renowned for their durability and ease of use, ball valves provide reliable sealing with low torque requirements. Ideal for quick shut-off and control in various applications. We offer ball valves, which are used for handling viscous & sticky fluids, slurries and highly corrosive substances. These are manufactured using high quality corrosion resistant material which makes suitable for controlling complex materials.",
            materials: "Cast carbon steel, forged carbon steel, stainless steel, cast iron, and alloy steel.",
            sizesAndClasses: "Available in sizes from ½'' to 24'' and pressure classes of 150#, 300#, 600#, 900#, and 1500#.",
            subCategories: [
                {
                    title: "1 pc, 2pc, and 3pc Ball Valves",
                    description: "1 pc Ball Valve: Known for their simplicity and ease of maintenance, used in low-pressure applications. 2 pc Ball Valve: Offering a balance between performance and cost, used in water treatment and chemical processing. 3 pc Ball Valve: Ideal for high-pressure applications, offering easy maintenance and excellent sealing.",
                    specs: [
                         { key: "Type", value: "Three Piece, Two Piece & One-Piece Design" },
                         { key: "Size", value: "15 mm to 600mm (One Piece up to 100mm)" },
                         { key: "Body Material", value: "WCB, CF8, CF8M, Alloy 20" },
                         { key: "End Connection", value: "Flanged End / Screwed End / Butt Weld End" },
                         { key: "Pressure Rating", value: "Class 150, 300, 600 & 800" },
                         { key: "Optional", value: "Trunnion Motorised Ball, Manual Gearbox or Motorised Operation" },
                         { key: "Design & Mfg. Standard", value: "BS 5351" },
                    ]
                }
            ]
        },
        {
            category: "Butterfly Valve",
            description: "Suitable for large volume water applications, butterfly valves offer a compact design with efficient flow control and quick shutoff capabilities. We are engaged in offering butterfly valves, which are widely used in chemical industries. These butterfly valves controls the flow of fluid flowing through a section of pipe. Available in various sizes, we can provide made-to-order butterfly valve as per customers’ requirements. Used for isolating or regulating flow, butterfly valves are common in water distribution, HVAC, and food processing industries. They offer quick operation, low pressure drop, and compact design.",
            materials: "Cast carbon steel, forged carbon steel, stainless steel, cast iron, and alloy steel.",
            sizesAndClasses: "Available in sizes from 2'' to 24'' and pressure classes of 150#, 300# and 600#.",
            subCategories: [
                 {
                    title: "General Specifications",
                    description: "",
                    specs: [
                         { key: "Type", value: "Centre Disc, Eccentric Disc" },
                         { key: "Size", value: "50mm to 600mm" },
                         { key: "Pressure Ratings", value: "150, 300, 600" },
                         { key: "Body Material", value: "C. I. WCB, CF8, CF8M" },
                         { key: "Operation", value: "By Lever / Gear / Motor / Actuator" },
                         { key: "Seat Material", value: "Natural & Synthetic Rubbers" },
                         { key: "Construction", value: "Wafer, Lug, Flanged ends" },
                         { key: "Disc Material", value: "C. I. WCB, CF8, CF8M" },
                         { key: "Other Function", value: "Pneumatic or Electrical Actuator can be provided, Gear Operation Provided for valves 200mm & above." },
                    ]
                }
            ]
        },
        {
            category: "Strainer",
            description: "Strainers are crucial for protecting pipelines and equipment by filtering out debris and contaminants. They help maintain the efficiency and longevity of systems. We offer Two Type of strainer, which are used removing foreign particles from liquids, gas or steam lines. Known for their high performance and longer service life, our strainer are a perfect solution to serve the requirements of various industries.",
            materials: "Cast carbon steel, forged carbon steel, stainless steel, cast iron, and alloy steel.",
            sizesAndClasses: "Available in sizes from 1'' to 16'' and pressure classes of 150#, 300#, 600#, 900#, and 1500#.",
            subCategories: [
                {
                    title: "Y-type and Basket Type",
                    description: "Y-type: Used to remove debris from pipelines, common in water supply, chemical processing, and HVAC systems. Basket Type: Used in applications requiring large filtration capacity, common in water treatment and food/beverage industries.",
                    specs: [
                        { key: "Type", value: "Y Type, Basket Type" },
                        { key: "Size Range", value: "25mm to 400mm" },
                        { key: "Pressure Rating", value: "Class 150, 300, 600, 1500" },
                        { key: "Body Materials", value: "WCB, CF 8, CF8M, Alloy 20, Cast Iron" },
                        { key: "Trim Material", value: "40/60 (Mesh), SS 304/316, Brass" },
                        { key: "End Connection", value: "Flanged as per ASNI B 16.5 Butt Welded as per ANSI B 16.25" },
                        { key: "Inspection & Testing Standard", value: "BS 6755 Part-1" },
                    ]
                }
            ]
        },
    ]

  return (
    <section id="products" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
            Our Products
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            A comprehensive selection of high-quality industrial valves, meticulously designed and manufactured to meet diverse industrial requirements.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {offerings.map((offering, index) => (
            <AccordionItem value={`item-${index}`} key={index} className="border rounded-lg bg-card px-6">
              <AccordionTrigger className="text-xl font-bold text-primary hover:no-underline">
                {offering.category}
              </AccordionTrigger>
              <AccordionContent className="pt-4 space-y-6">
                {offering.description && <p className="text-muted-foreground">{offering.description}</p>}
                {offering.materials && <p><span className="font-semibold text-foreground">Materials:</span> <span className="text-muted-foreground">{offering.materials}</span></p>}
                {offering.sizesAndClasses && <p><span className="font-semibold text-foreground">Sizes and Classes:</span> <span className="text-muted-foreground">{offering.sizesAndClasses}</span></p>}

                <div className="space-y-4">
                    {offering.subCategories.map((sub, subIndex) => (
                        <div key={subIndex} className="p-4 border rounded-md bg-background">
                            <h4 className="font-bold text-lg mb-2 text-primary">{sub.title}</h4>
                            {sub.description && <p className="text-muted-foreground mb-4">{sub.description}</p>}
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[300px]">Specification</TableHead>
                                        <TableHead>Details</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {sub.specs.map((spec, specIndex) => (
                                        <TableRow key={specIndex}>
                                            <TableCell className="font-medium">{spec.key}</TableCell>
                                            <TableCell>{spec.value}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="text-center mt-12 text-muted-foreground">
             <p>Insha Industries continues to set benchmarks in the industrial valve industry, driven by our passion for excellence and our unwavering dedication to our customers. We look forward to a future of growth, innovation, and success, serving the needs of industries worldwide.</p>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
