package cilib

/**
  A `Step` is a type that models a single step within a CI Algorithm's operation.

  The general idea would be that you would compose different `Step`s
  to produce the desired algorithmic behaviour.

  Even though this is an initial pass at modeling the compuation of CI algorithms
  this way, it does provide a recursive, list-like composition allowing a multitude
  of different usages (or it is hoped to be so).

  `Step` is nothing more than a data structure that hides the details of a
  monad transformer stack which represents the algoritm parts.
  */
object Step {
  import scalaz._

  def apply[/*F[_],*/A,B](f: ((Opt,Eval[A])) => RVar[B]) =
    Kleisli[RVar,(Opt,Eval[A]),B](f)

  def point[/*F[_],*/A,B](b: B): Step[A,B] =
    Kleisli[RVar,(Opt,Eval[A]),B](_ => RVar.point(b))

  def pointR[/*F[_],*/A,B](a: RVar[B]): Step[A,B] =
    Kleisli[RVar,(Opt,Eval[A]),B](_ => a)

  def liftK[/*F[_],*/A,B](a: Reader[Opt, B]): Step[A,B] =
    Kleisli[RVar,(Opt,Eval[A]),B]((o: (Opt,Eval[A])) => RVar.point(a.run(o._1)))

}
