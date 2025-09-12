import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Image from 'next/image';
import images from '@/lib/placeholder-images.json';

const SpecTable = ({
  data,
}: {
  data: {
    spec: string;
    value: string;
  }[];
}) => (
  <Table className="my-4 border">
    <TableBody>
      {data.map(row => (
        <TableRow key={row.spec}>
          <TableCell className="font-medium border-r w-1/3">
            {row.spec}
          </TableCell>
          <TableCell>{row.value}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

const gateValveData = [
    { spec: 'Type', value: 'Forged Steel Gate Valve' },
    { spec: 'Size', value: 'From 15 mm to 50 mm' },
    { spec: 'Pressure Rating', value: 'Class 150, 300, 600, 800, 1500, 2500' },
    { spec: 'Design & Mfg. Standard', value: 'API 602 (Gate) BS 5352' },
    { spec: 'Inspection & Testing Standard', value: 'API 598, BS 5146' },
    { spec: 'Body Material', value: 'ASTM A 105, A182 F304 F316' },
    { spec: 'Trim Materials', value: 'AISI 410 / 304 / 316, Stellited Monel' },
    { spec: 'End Connection', value: 'Screwed, Socket Welded as per ANSI B 16.11 or Welded Flanges as per ANSI B 16.5 in class 150, 300, 600' },
];

const globeValveData = [
    { spec: 'Type', value: 'Forged Steel Globe Valve' },
    { spec: 'Size', value: 'From 15 mm to 50 mm' },
    { spec: 'Pressure Rating', value: 'Class 150, 300, 600, 800, 1500, 2500' },
    { spec: 'Design & Mfg. Standard', value: 'API 602 BS 5352' },
    { spec: 'Inspection & Testing Standard', value: 'API 598, BS 5146' },
    { spec: 'Body Material', value: 'ASTM A 105, A182 F304 F316' },
    { spec: 'Trim Materials', value: 'AISI 410 / 304 / 316, Stellited Monel' },
    { spec: 'End Connection', value: 'Screwed, Socket Welded as per ANSI B 16.11 or Welded Flanges as per ANSI B 16.5 in class 150, 300, 600' },
];

const ForgedSteelValvesContent = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl mb-4">
          Forged Steel Valves
        </h1>
      </div>

      <div className="grid grid-cols-2 items-center gap-8">
        <div className="relative w-full h-64">
            <Image
                src={images.forgedSteelHighlighter.src}
                alt={images.forgedSteelHighlighter.alt}
                fill
                className="object-contain"
                data-ai-hint="forged steel"
                loading="lazy"
            />
        </div>
        <div className="relative w-full h-64">
            <Image
                src={images.forgedSteelBanner.src}
                alt={images.forgedSteelBanner.alt}
                fill
                className="object-contain"
                data-ai-hint="industrial valve"
                loading="lazy"
            />
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-primary mb-4">
          Gate Valves
        </h2>
        <p className='text-lg text-muted-foreground'>Known for their strength and durability, used in high-pressure and high-temperature applications.</p>
        
        <h3 className="text-2xl font-bold text-primary mt-6 mb-2">
          Screwed/Socket Weld End
        </h3>
        <p className="text-lg text-muted-foreground">
          These gate valves are perfect for smaller pipelines and applications where space is limited. They offer a secure and leak-proof connection, making them suitable for high-pressure and high-temperature environments.
        </p>
        <ul className="list-disc list-inside text-lg text-muted-foreground space-y-1 mt-4">
          <li>
            <span className="font-semibold text-foreground">Materials:</span>{' '}
            Cast carbon steel, forged carbon steel, stainless steel, cast iron, and alloy steel.
          </li>
          <li>
            <span className="font-semibold text-foreground">
              Size:
            </span>{' '}
            1/2" to 2"
          </li>
           <li>
            <span className="font-semibold text-foreground">
              Classes:
            </span>{' '}
            150, 300, 600, 800, 1500, 2500
          </li>
        </ul>
        <SpecTable data={gateValveData} />
      </div>

      <div>
        <h2 className="text-3xl font-bold text-primary mb-4">
          Globe Valves
        </h2>
        <p className='text-lg text-muted-foreground'>Provides precise flow control and robust performance in demanding environments.</p>

        <h3 className="text-2xl font-bold text-primary mt-6 mb-2">
          Screwed/Socket Weld End
        </h3>
        <p className="text-lg text-muted-foreground">
          These globe valves are ideal for smaller systems where precise flow regulation is critical. They are used in fuel handling, water treatment, and various industrial processes.
        </p>
         <ul className="list-disc list-inside text-lg text-muted-foreground space-y-1 mt-4">
          <li>
            <span className="font-semibold text-foreground">Materials:</span>{' '}
            Cast carbon steel, forged carbon steel, stainless steel, cast iron, and alloy steel.
          </li>
          <li>
            <span className="font-semibold text-foreground">
              Size:
            </span>{' '}
            1/2" to 2"
          </li>
           <li>
            <span className="font-semibold text-foreground">
              Classes:
            </span>{' '}
            150, 300, 600, 800, 1500, 2500
          </li>
        </ul>
        <SpecTable data={globeValveData} />
      </div>
    </div>
  );
};

export default ForgedSteelValvesContent;
