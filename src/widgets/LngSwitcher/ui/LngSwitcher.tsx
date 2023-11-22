import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './LngSwitcher.module.scss';

interface LngSwitcherProps {
	className?: string;
}

export const LngSwitcher = ({ className }: LngSwitcherProps) => {
	const { t, i18n } = useTranslation();
	const toggleLng = () => {
		i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en');
	};
	return (
		<Button
			className={classNames(cls.LangSwitcher, {}, [className])}
			theme={ButtonTheme.CLEAR}
			onClick={toggleLng}
		>
			{t('language')}
		</Button>
	);
};
