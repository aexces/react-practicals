import Table from "../../components/templates/Table/Table";
import { useState, useEffect } from "react";
import HubRepository from "@/infrastructure/repositories/hubs/HubRepository";
import IHubsDto from "@/infrastructure/repositories/hubs/IHubDto";
import { HubColumns } from "@/domain/hubs/HubColumns";
import Loader from "@/presentation/components/atoms/Loader/Loader";
import IGetHubsParams from "@/infrastructure/repositories/hubs/IGetHubsParams";
const HubsPage = () => {
  const [hubs, setHubs] = useState<IHubsDto[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [getHubsParams, setGetHubsVariables] = useState<IGetHubsParams>();

  useEffect(() => {
    setGetHubsVariables({ isActive: true });
  }, []);
  useEffect(() => {
    if (getHubsParams) {
      fetchData(getHubsParams);
    }
  }, [getHubsParams]);

  const fetchData = async (getHubsVariables: IGetHubsParams) => {
    try {
      const result = await HubRepository.getHubs(getHubsVariables);
      setHubs(result);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (searchKey: string) => {
    setGetHubsVariables((prevData) => ({
      ...prevData,
      ["searchKey"]: searchKey,
    }));
  };
  return (
    <div>
      {hubs ? (
        <Table rows={hubs} columns={HubColumns} onSearch={handleSearch} />
      ) : (
        <Loader loading={isLoading} />
      )}
    </div>
  );
};

export default HubsPage;
