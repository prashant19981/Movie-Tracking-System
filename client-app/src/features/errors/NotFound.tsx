import { Segment, Header, Icon, SegmentInline } from "semantic-ui-react";

export default function NotFound() {
    return (
        <Segment placeholder>
            <Header icon>
                <Icon name='search' />
                We don't have any movies matching your query.
            </Header>
            <SegmentInline>
                Please adjust your filters or start a new search
            </SegmentInline>
        </Segment>
    )
}