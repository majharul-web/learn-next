import { useRouter } from "next/router";

const Doc = () => {
  const router = useRouter();
  const { params = [] } = router.query;

  if (params.length == 2) {
    return (
      <div>
        <h3>
          Viewing Doc from feat:{params[0]} and concept:{params[1]}
        </h3>
      </div>
    );
  } else if (params.length == 1) {
    return (
      <div>
        <h3>Viewing Doc from feat:{params[0]}</h3>
      </div>
    );
  }
  return (
    <div>
      <h3>Doc home page</h3>
    </div>
  );
};

export default Doc;
