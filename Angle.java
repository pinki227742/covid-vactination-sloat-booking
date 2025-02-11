 
	public class Angle
    {
       public static void main(String args[]){
       int arr[][]={
               {4,65,81,5,6},
               {77,23,45,2,99},
               {56,1,78,39,11},
               {93,34,74,18,7},
               {8,55,69,81,16}

               };
           int min=Integer.MAX_VALUE;
           int i,j;
       for(i=0;i<arr.length-1;i++){
       for(j=0;j<arr[i].length-1;j++){
       int temp=arr[i][j]+arr[i+1][j]+arr[i+1][j+1];
       if( min>temp)
       min=temp;
   
       }
    
       
   }
   System.out.println(min);
   
}}