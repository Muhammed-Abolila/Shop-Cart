import React from "react";
import { Container, Row } from "react-bootstrap";
import PaginationComp from "../../components/Utilities/Pagination/Pagination";
import AllCategoriesPageHook from "../../CustomHooks/CtegoryHooks/AllCategoriesPageHook";
import CategoryContainer from "../../components/Home/CategoryContainer/CategoryContainer";
import Spinner from "../../components/Utilities/Spinner/Spinner";
const AllCategories = () => {
  let [
    CategoryData,
    PaginationData,
    getPageCount
  ] = AllCategoriesPageHook();
  return (
    <>
      {CategoryData? (
        <section className="pageStyle py-3 mb-5">
          <Container>
            <CategoryContainer
              CategoryData={CategoryData}
              title={"All Categories"}
            />
            {PaginationData > 1 ? (
              <PaginationComp
                PaginationData={PaginationData}
                getPageCount={getPageCount}
              />
            ) : null}
          </Container>
        </section>
      ) : (
        <Spinner />
      )}
    </>
  );
};
export default AllCategories;
