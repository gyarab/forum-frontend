import React, {Component} from 'react';
import { Card, CardHeader, CardBody,
    CardText } from 'reactstrap';
import '../styles/lilPost.css';


class Navigation extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {};

    render() {
        return (
            <div>
                <Card >
                    <CardHeader className={"card-header"}>Title of the post</CardHeader>
                    <CardBody className={"card-body"}>
                        <CardText> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam sapien sem, ornare ac, nonummy non, lobortis a enim. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce nibh. In rutrum. Aliquam erat volutpat. Nullam sapien sem, ornare ac, nonummy non, lobortis a enim. Morbi leo mi, nonummy eget tristique non, rhoncus non leo. In dapibus augue non sapien. Integer lacinia. Aliquam erat volutpat. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Vivamus ac leo pretium faucibus. Integer vulputate sem a nibh rutrum consequat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aenean vel massa quis mauris vehicula lacinia.</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default Navigation;