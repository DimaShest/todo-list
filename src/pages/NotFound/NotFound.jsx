import { Link } from 'react-router-dom';
import stylesApp from '../../App.module.css';

export const NotFound = () => (
	<div className={stylesApp.App}>
		<title>404</title>
		<h1 className={stylesApp.pageTitle}>404</h1>
		<h2 className={stylesApp.pageTitle}>Страница не найдена</h2>
		<div>{`Скорее всего, вы попали сюда из-за опечатки в адресе страницы. Попробуйте `}
			<Link to='/'> вернуться на главную</Link>.
		</div>
	</div>
)
