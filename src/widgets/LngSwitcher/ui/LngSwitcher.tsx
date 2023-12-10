import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface LngSwitcherProps {
  className?: string;
}

export const LngSwitcher = ({ className }: LngSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const toggleLng = async () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en');
    };
    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={toggleLng}
        >
            {t('language')}
        </Button>
    );
};
