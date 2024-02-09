import React from 'react'
import { Path, Svg } from 'react-native-svg'

type IProps = {
  w: string;
  h: string;
  fill: string;
}

export default function QRCodeIcon({ w, h, fill }: IProps) {
  return (
    // @ts-ignore
    <Svg width={w} height={h} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M12.75 10.5H10.75C10.6119 10.5 10.5 10.6119 10.5 10.75V12.75C10.5 12.8881 10.6119 13 10.75 13H12.75C12.8881 13 13 12.8881 13 12.75V10.75C13 10.6119 12.8881 10.5 12.75 10.5Z" fill={fill}/>
      <Path d="M10.25 8.5H8.75C8.61193 8.5 8.5 8.61193 8.5 8.75V10.25C8.5 10.3881 8.61193 10.5 8.75 10.5H10.25C10.3881 10.5 10.5 10.3881 10.5 10.25V8.75C10.5 8.61193 10.3881 8.5 10.25 8.5Z" fill={fill}/>
      <Path d="M14.75 13H13.25C13.1119 13 13 13.1119 13 13.25V14.75C13 14.8881 13.1119 15 13.25 15H14.75C14.8881 15 15 14.8881 15 14.75V13.25C15 13.1119 14.8881 13 14.75 13Z" fill={fill}/>
      <Path d="M14.75 8.5H13.75C13.6119 8.5 13.5 8.61193 13.5 8.75V9.75C13.5 9.88807 13.6119 10 13.75 10H14.75C14.8881 10 15 9.88807 15 9.75V8.75C15 8.61193 14.8881 8.5 14.75 8.5Z" fill={fill}/>
      <Path d="M9.75 13.5H8.75C8.61193 13.5 8.5 13.6119 8.5 13.75V14.75C8.5 14.8881 8.61193 15 8.75 15H9.75C9.88807 15 10 14.8881 10 14.75V13.75C10 13.6119 9.88807 13.5 9.75 13.5Z" fill={fill}/>
      <Path d="M12.75 3H10.75C10.6119 3 10.5 3.11193 10.5 3.25V5.25C10.5 5.38807 10.6119 5.5 10.75 5.5H12.75C12.8881 5.5 13 5.38807 13 5.25V3.25C13 3.11193 12.8881 3 12.75 3Z" fill={fill}/>
      <Path d="M14 1.5H9.5C9.22386 1.5 9 1.72386 9 2V6.5C9 6.77614 9.22386 7 9.5 7H14C14.2761 7 14.5 6.77614 14.5 6.5V2C14.5 1.72386 14.2761 1.5 14 1.5Z" stroke={fill} stroke-linecap="round" stroke-linejoin="round"/>
      <Path d="M5.25 3H3.25C3.11193 3 3 3.11193 3 3.25V5.25C3 5.38807 3.11193 5.5 3.25 5.5H5.25C5.38807 5.5 5.5 5.38807 5.5 5.25V3.25C5.5 3.11193 5.38807 3 5.25 3Z" fill={fill}/>
      <Path d="M6.5 1.5H2C1.72386 1.5 1.5 1.72386 1.5 2V6.5C1.5 6.77614 1.72386 7 2 7H6.5C6.77614 7 7 6.77614 7 6.5V2C7 1.72386 6.77614 1.5 6.5 1.5Z" stroke={fill} stroke-linecap="round" stroke-linejoin="round"/>
      <Path d="M5.25 10.5H3.25C3.11193 10.5 3 10.6119 3 10.75V12.75C3 12.8881 3.11193 13 3.25 13H5.25C5.38807 13 5.5 12.8881 5.5 12.75V10.75C5.5 10.6119 5.38807 10.5 5.25 10.5Z" fill={fill}/>
      <Path d="M6.5 9H2C1.72386 9 1.5 9.22386 1.5 9.5V14C1.5 14.2761 1.72386 14.5 2 14.5H6.5C6.77614 14.5 7 14.2761 7 14V9.5C7 9.22386 6.77614 9 6.5 9Z" stroke={fill} stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>

  )
}
