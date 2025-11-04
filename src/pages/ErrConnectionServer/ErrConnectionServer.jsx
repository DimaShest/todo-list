import stylesApp from '../../App.module.css';

export const ErrConnectionServer = () => (
	<div className={stylesApp.App}>
		<div className={stylesApp.pageTitle}>
			Ошибка подключения к серверу. Попробуйте ёще раз позже.
		</div>
	</div>
)
