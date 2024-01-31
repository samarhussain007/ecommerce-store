import { Billboard as BillboardType } from "@/types";

interface BillboardProps {
  data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  console.log(data);
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div className="rounded-xl aspect-square relative md:aspect-[2.4/1] overflow-hidden bg-cover items-center justify-center">
        <div
          className="w-[100%] h-[100%] absolute -z-20 bg-no-repeat blur-sm bg-top bg-cover"
          style={{
            backgroundImage: `url(${data?.imageUrl})`,
          }}
        />
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8 ">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-white">
            {data.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;