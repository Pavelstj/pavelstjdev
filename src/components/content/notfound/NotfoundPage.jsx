import './styles.css';

const NotFoundPage = () => {

    return (
        <div className='content-item item-notfound'>
            <div className='nf-code'>404</div>
            <div className='nf-message'>
                <div className='message-nf'>Sorry!</div>
                <div className='message-text'>The page you're looking for was not found</div>
            </div>
        </div>
    );
}

export default NotFoundPage;