import { useEffect } from 'react';
import styled from 'styled-components';
import { useFetchGithub } from '../../contexts/';
import { IssueListItem } from '../IssueListItem/IssueListItem';
import { Advertisement } from '../Advertisement/Advertisement';

export function IssueList() {
  const { issueList, fetchIssueListGithub, isLoading } = useFetchGithub();

  useEffect(() => {
    fetchIssueListGithub();
  }, []);

  // const PER_PAGE = 10;
  // const [pageInfo, setPageInfo] = useState({
  //   page: 1,
  //   totalPage: 100,
  // });

  return !isLoading ? (
    <IssueWrap>
      {issueList.map((item, idx) =>
        (idx + 1) % 4 === 0 ? (
          <IssueListItem key={item.id} item={item}>
            <Advertisement />
          </IssueListItem>
        ) : (
          <IssueListItem key={item.id} item={item} />
        )
      )}
    </IssueWrap>
  ) : (
    <>loading...</>
  );
}

const IssueWrap = styled.ul`
  list-style: none;
  width: 1000px;
  margin: 0 auto;
  padding: 0;
`;
