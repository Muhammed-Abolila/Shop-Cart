import UesrSideBarComp from "../../components/UserComp/SideBarComp/UserSideBarComp";
import UserAllOrders from "../../components/UserComp/UserAllOrders/UserAllOrders";
import { Col, Container, Row } from "react-bootstrap";
import PaginationComp from "../../components/Utilities/Pagination/Pagination";
import UserAllOrdersPageHook from "../../CustomHooks/User/UserAllOrdersPageHook";
import NoProductYet from "../../components/Utilities/NoProductYet/NoProductYet";
import Spinner from "../../components/Utilities/Spinner/Spinner";
const UserAllOrdersPage = () => {
  let [
    user,
    ordersResponse,
    ordersResponseData,
    pagination,
    getPageCount
  ] = UserAllOrdersPageHook();
  return (
    <>
      {ordersResponseData ? (
        <section className="pageStyle py-3 mb-5">
          <Container>
            <Row className="mb-3">
              <Col xs={{ span: 8, offset: 2 }} md={{ span: 3, offset: 0 }}>
                <UesrSideBarComp />
              </Col>
              <Col xs={{ span: 10, offset: 1 }} md={{ span: 9, offset: 0 }}>
                <h3 className="mb-4">
                  Number Of Orders #{ordersResponse.results}
                </h3>
                {ordersResponseData.length >= 1 ? (
                  <div>
                    {ordersResponseData.map((data, index) => (
                      <UserAllOrders key={index} ordersData={data} />
                    ))}
                  </div>
                ) : (
                  <NoProductYet msg="No Orders Yet" />
                )}
              </Col>
            </Row>
            {pagination > 1 && (
              <PaginationComp
                PaginationData={pagination}
                getPageCount={getPageCount}
              />
            )}
          </Container>
        </section>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default UserAllOrdersPage;
