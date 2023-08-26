import { screen } from '@testing-library/react';
import { renderTheme } from '../../../styles/render-theme';
import { MenuLink } from './MenuLink';

describe('<MenuLink />', () => {
  it('should render', () => {
    renderTheme(<MenuLink link="http://localhost">Children</MenuLink>);
    expect(screen.getByRole('link', { name: 'Children' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_self',
    );
  });
  it('should open in a new tab', () => {
    const { container } = renderTheme(
      <MenuLink link="http://localhost" newTab={true}>
        Children
      </MenuLink>,
    );
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_blank',
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
